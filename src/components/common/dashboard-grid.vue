<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="row">
        <div class="col-lg-6">База героев</div>
        <div class="col-lg-6">
          <div class="input-group">
            <input type="text" class="form-control" v-model="searchBox">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="getSearch">Go!</button>
          </span>
          </div>
          <div v-if="this.showSearchLink">
            <router-link :to="{path: `/search-result/${this.searchBox}`, params: {index: this.searchBox}}">
              Ссылка на результаты поиска
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-body">

      <table ref="table" class="table table-striped">
        <thead>
          <slot name="header"></slot>
        </thead>
        <tbody>
          <tr v-for="(item, index) in this.list.results" :key="index">
            <slot name="row" v-bind="item" :index="getIndex(item.url)"></slot>
          </tr>
        </tbody>
      </table>

      <div class="form-group">
        <nav aria-label="Page navigation">
          <ul class="pagination">

            <li :class="{disabled : !list.previous}">
              <a :href="list.previous" aria-label="Previous" @click.prevent="prevPage">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            <li :class="{disabled : !list.next}">
              <a :href="list.next" aria-label="Next" @click.prevent="nextPage">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashboardGrid',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      showSearchLink: false,
      restUrl: this.url,
      restSearchIndex: this.searchIndex,
      searchBox: '',
      searchUrl: 'https://swapi.dev/api/people/?search='
    }
  },
  methods: {
    loadData() {
      this.loading = true;

      fetch(this.restUrl)
        .then(response => response.json())
        .then(data => {
          this.list = data;
          this.loading = false;
          this.showSearchLink = this.searchBox !== '';
        });
    },
    getIndex (link) {
      return link.slice(1, -1).split('/').pop();
    },
    nextPage () {
      this.restUrl = this.list.next;
      this.loadData();
    },
    prevPage () {
      this.restUrl = this.list.next;
      this.loadData();
    },
    getSearch () {
      this.restUrl = this.searchUrl + this.searchBox;
      this.loadData();
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
