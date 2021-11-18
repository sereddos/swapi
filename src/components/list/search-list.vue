<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      Количесвто найденных кораблей по запросу <strong>{{this.list.count}}</strong>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in this.list.results">
          <strong>Name:</strong>
          <router-link :to="{path: getPath(item.url), params: {index: getIndex(item.url)}}">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      list: [],
      restUrl: 'https://swapi.dev/api/people/?search=',
    }
  },
  computed: {
    url() {
      return `${this.restUrl}${this.id}`;
    }
  },
  watch: {
    $route: 'loadData'
  },
  methods: {
    loadData() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this.list = data;
        });
    },
    getPath (url) {
      const index = this.getIndex(url);
      return `/people/${index}`;
    },
    getIndex (link) {
      return link.slice(1, -1).split('/').pop();
    }
  },
  mounted () {
    this.loadData();
  }
};
</script>
