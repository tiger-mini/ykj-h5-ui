<template>
  <header id='header' class='clearfix'>
    <div class='ant-row' style='flex-flow: nowrap; height: 64px; row-gap: 0px;'>
      <div class='ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-6 ant-col-xl-5 ant-col-xxl-4' style=''>
        <h1>
          <a id='logo' href='/'>
            <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'>YKJ H5 UI Design
          </a>
        </h1>
      </div>
      <div class='ant-col menu-row ant-col-xs-0 ant-col-sm-0 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20'
           style=''>
        <div id='search-box' class='focused'>
          <span class='ant-input-affix-wrapper'><span class='ant-input-prefix'><span
            role='img' aria-label='search' class='anticon anticon-search'>
            <svg viewBox='64 64 896 896' focusable='false'
                 data-icon='search' width='1em'
                 height='1em'
                 fill='currentColor' aria-hidden='true'><path
              d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'></path></svg></span></span><span
            class='algolia-autocomplete' style='position: relative; display: inline-block; direction: ltr;'><input
            placeholder='搜索' class='ant-input ds-input' type='text' value='' autocomplete='off' spellcheck='false'
            role='combobox' aria-autocomplete='list' aria-expanded='false' aria-label='search input'
            aria-owns='algolia-autocomplete-listbox-0' dir='auto' style='position: relative; vertical-align: top;'><pre
            aria-hidden='true'
            style='position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;apple color emoji&quot;, &quot;segoe ui emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;noto color emoji&quot;; font-size: 14px; font-style: normal; font-variant: tabular-nums; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;'></pre><span
            class='ds-dropdown-menu' role='listbox' id='algolia-autocomplete-listbox-0'
            style='position: absolute; top: 100%; z-index: 100; left: 0px; right: auto; display: none;'><div
            class='ds-dataset-1'></div></span></span><span class='ant-input-suffix'><span class='keybindings'><span
            class='ant-typography keybinding' ><kbd>Ctrl</kbd></span><span
            class='ant-typography keybinding' ><kbd>K</kbd></span></span></span></span></div>
        <ul class='ant-menu ant-menu-root ant-menu-horizontal ant-menu-light menu-site' id='nav' dir='ltr' role='menu'
            tabindex='0' data-menu-list='true'>
          <li class='ant-menu-item ant-menu-item-only-child'   data-menu-id='nav-docs/spec'>
            <span class='ant-menu-title-content'><a href='/'>设计</a></span></li>
          <li class='ant-menu-item ant-menu-item-only-child'
              data-menu-id='nav-docs/react'><span class='ant-menu-title-content'><a
            href='/'>文档</a></span></li>
          <li class='ant-menu-item ant-menu-item-selected ant-menu-item-only-child'
              data-menu-id='nav-components'><span class='ant-menu-title-content'><a
            href='/'>组件</a></span></li>
          <li class='ant-menu-item ant-menu-item-only-child'
              data-menu-id='nav-docs/resources'>
            <span class='ant-menu-title-content'><a href='/'>资源</a></span>
          </li>
          <li class='ant-menu-item ant-menu-item-only-child'  >
            <span class='ant-menu-title-content'><a href='/'>国内镜像</a></span></li>
        </ul>
        <div aria-hidden='true' style='display: none;'></div>
        <div class='ant-select ant-select-sm version ant-select-single ant-select-show-arrow'>
          <div class='ant-select-selector'><span class='ant-select-selection-search'>
            <input type='search'
                   autocomplete='off'
                   class='ant-select-selection-search-input'
                   role='combobox'
                   aria-haspopup='listbox'
                   aria-owns='rc_select_1_list'
                   aria-autocomplete='list'
                   aria-controls='rc_select_1_list'
                   aria-activedescendant='rc_select_1_list_0'
                   readonly=''
                   unselectable='on' value=''
                   id='rc_select_1'
                   style='opacity: 0;'></span><span
            class='ant-select-selection-item' title='4.19.2'>4.19.2</span></div>
          <span class='ant-select-arrow' unselectable='on' aria-hidden='true' style='user-select: none;'><span
            role='img' aria-label='down' class='anticon anticon-down ant-select-suffix'>
            <svg viewBox='64 64 896 896'
                 focusable='false'
                 data-icon='down'
                 width='1em' height='1em'
                 fill='currentColor'
                 aria-hidden='true'>
              <path
                d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path></svg></span></span>
        </div>
        <button type='button' class='ant-btn ant-btn-default ant-btn-sm header-button header-lang-button'>English
        </button>
        <button type='button' class='ant-btn ant-btn-default ant-btn-sm header-button header-direction-button'>
          <span>RTL</span></button>
        <button type='button' class='ant-btn ant-btn-default ant-btn-sm ant-dropdown-trigger header-button'>更多<span
          role='img' aria-label='down' class='anticon anticon-down'
          style='font-size: 9px; margin: -1px 0px 0px 2px; vertical-align: middle;'>
          <svg viewBox='64 64 896 896'
               focusable='false'
               data-icon='down' width='1em'
               height='1em'
               fill='currentColor'
               aria-hidden='true'><path
            d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path></svg></span>
        </button>
        <span id='github-btn' class='github-btn'>
          <a class='gh-btn' href='/'
             target='_blank'><span class='gh-ico' aria-hidden='true'></span><span
            class='gh-text'>Star</span></a>
          <a class='gh-count' target='_blank'
             href='#'
             style='display: block;'>78809</a></span></div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      size: 36
    }
  }
}
</script>
<style lang='scss' scoped>
#header {
  position: relative;
  z-index: 10;
  max-width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;

  .ant-row {
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
