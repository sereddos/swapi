<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      Корабль <strong>{{this.list.name}}</strong>
    </div>
    <div class="panel-body">
      <ul class="list-group">
        <li class="list-group-item" v-for="(value, name) in this.list">
          <strong>{{ name }}:</strong> {{ value }}
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
        restUrl: 'https://swapi.dev/api/starships/',
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
      }
    },
    mounted () {
      this.loadData();
    }
  };
</script>
