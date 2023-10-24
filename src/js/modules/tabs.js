const tabs = () => { 
  const tabsParent = document.querySelector('.tabs'),
    trigersTag = tabsParent.querySelectorAll('.tabs__tab'),
    contentsTab = tabsParent.querySelectorAll('.tabs__content-item');


  trigersTag.forEach((triger, i) => {
    triger.addEventListener('click', (e) => {
      showContentTabs(contentsTab, i);
    });
  });


  function showContentTabs(contents, index) {
    trigersTag.forEach((triger, i) => {
      if (i === index) {
        triger.classList.add('tabs__tab_active');
      } else {
        triger.classList.remove('tabs__tab_active');
      }
      
    })

    if (contents[index]) {
      contents.forEach((content, i) => {
        if (i === index) {
          content.classList.add('tabs__content-item_active');
        } else {
          content.classList.remove('tabs__content-item_active');
        }
      });
    }
  }

  showContentTabs(contentsTab, 1)
}

export default tabs;