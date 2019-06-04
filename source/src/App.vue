<template>
  <v-app>
    <v-navigation-drawer fixed app clipped>
      <v-list>
        <v-list-group :key="section.id" v-for="section in structure.scheme">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{section.name}}</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            no-action
            sub-group
            :key="child.id"
            v-for="child in section.sections"
            :to="child.link"
            
          >
         
            <v-list-tile-title>{{child.name}}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dense fixed clipped-left height="70px">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn href="#" color="blue" nuxt>На сайт</v-btn>
        <v-btn href="#" color="blue" nuxt>Рабочий стол</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
     
       
      <v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      routerPath: ''
    };
  },
  watch: {
    $route (to, from ) {
      console.log(to, from)
      this.routerPath = to.path
    }
  },
  computed: {
    ...mapState({
      structure: state => state.structure
    }),
    breadcrumbs () {
      let pathArray = this.routerPath.split("/")
      pathArray.shift(); 

      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
       
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  },

};
</script>
