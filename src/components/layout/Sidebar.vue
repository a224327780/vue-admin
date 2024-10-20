<template>
  <div>
    <!-- logo -->
    <transition name="fade">
      <div id="i-layout-sider-logo" class="i-layout-sider-logo" :class="logoClasses">
        <router-link class="i-layout-sider-logo-link" to="/">
          <h1 class="sider-logo-title">
            {{ title }}
          </h1>
        </router-link>
      </div>
    </transition>
    <!-- menu -->
    <Menu
        ref="menuElement"
        :theme="sideTheme"
        class="i-layout-menu-side i-scrollbar-hide"
        :class="{
        'i-layout-menu-side-collapse': isCollapsed,
        'i-layout-menu-side-has-logo': hasLogo,
      }"
        width="auto"
        :accordion="menuAccordion"
        :active-name="activeMenu"
        :open-names="openNames"
    >
    </Menu>
  </div>
</template>
<script setup>
</script>