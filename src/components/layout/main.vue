<template>
  <Layout class="app-layout" :class="layoutClasses">
    <Sider class="i-layout-sider" :class="siderClasses" v-model="isCollapsed" hide-trigger :width="sideBarWidth" :collapsed-width="64" collapsible>
      <Sidebar/>
    </Sider>
    <Layout class="i-layout-main" :class="mainClasses">
      <Header class="i-layout-header" :class="headerClasses">
      </Header>
      <Content class="content-wrapper" style="position: relative">
        <router-view v-slot="{ Component }">
          <keep-alive :include="cacheList">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";

export default {
  name: 'Main',
  components: {
    Sidebar
  },
  data () {
    return {
      collapsed: false,
    }
  },
  computed: {
    cacheList () {
      return []
    },
    menuList () {
      return this.$store.getters.menuList
    },
    local () {
      return this.$store.state.app.local
    },
    hasReadErrorPage () {
      return this.$store.state.app.hasReadErrorPage
    }
  },
  methods: {
  }
}
</script>