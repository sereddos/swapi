<template>
  <dashboard-grid :url="url">
    <tr slot="header">
      <th>Имя</th>
      <th>Рост</th>
      <th>Вес</th>
      <th>Цвет волос</th>
      <th>Цвет кожи</th>
      <th>Цвет глаз</th>
      <th>Пол</th>
    </tr>
    <template slot="row" slot-scope="props">
      <td>
        <router-link :to="{path: getPath(props.index), params: {index: props.index}}">
          {{ props.name }}
        </router-link>
      </td>
      <td>{{ props.height }}</td>
      <td>{{ props.mass }}</td>
      <td>{{ props.hair_color }}</td>
      <td>{{ props.skin_color }}</td>
      <td>{{ props.eye_color }}</td>
      <td>{{ props.gender }}</td>
    </template>
  </dashboard-grid>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      default: ''
    }
  },
  components: {
    DashboardGrid: () => import('@/components/common/dashboard-grid.vue')
  },
  data: () => ({
    url: 'https://swapi.dev/api/people/'
  }),
  methods: {
    getPath (pathIndex) {
      return `/people/${pathIndex}`;
    }
  }
};
</script>

<style>
  .panel-body {
    padding: 15px;
    overflow: auto;
  }
</style>
