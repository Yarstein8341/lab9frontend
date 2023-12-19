class Tabs {
    constructor(tabsContainerId, tabContentContainerId, addTabBtnId, changeContentBtnId) {
        this.tabsContainer = document.getElementById(tabsContainerId);
        this.tabContentContainer = document.getElementById(tabContentContainerId);
        this.addTabBtn = document.getElementById(addTabBtnId);
        this.changeContentBtn = document.getElementById(changeContentBtnId);
        this.tabs = [];
        this.tabContents = [];
        this.addTabBtn.addEventListener('click', () => this.addTab('New Tab', 'New Content'));
        this.changeContentBtn.addEventListener('click', () => this.changeContent());
    }

    addTab(tabName, tabContent) {
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.textContent = tabName;
        this.tabs.push(tab);

        const tabContentElement = document.createElement('div');
        tabContentElement.className = 'tabContent';
        tabContentElement.textContent = tabContent;
        this.tabContents.push(tabContentElement);

        this.tabsContainer.appendChild(tab);
        this.tabContentContainer.appendChild(tabContentElement);

        tab.addEventListener('click', () => this.toggleTab(tab));
    }

    toggleTab(selectedTab) {
        this.tabs.forEach((tab, index) => {
            if (tab === selectedTab) {
                tab.classList.add('activeTab');
                this.tabContents[index].classList.add('activeTab');
            } else {
                tab.classList.remove('activeTab');
                this.tabContents[index].classList.remove('activeTab');
            }
        });
    }

    changeContent() {
        const activeTabContent = this.tabContentContainer.querySelector('.activeTab');
        if (activeTabContent) {
            activeTabContent.textContent = 'New Content for Active Tab';
        }
    }
}

const tabs = new Tabs('tabsContainer', 'tabContentContainer', 'addTabBtn', 'changeContentBtn');


tabs.addTab('Tab 1', 'Content for Tab 1');
tabs.addTab('Tab 2', 'Content for Tab 2');
tabs.addTab('Tab 3', 'Content for Tab 3');