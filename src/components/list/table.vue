<template>
  <dashboard-grid :url="url">
    <tr slot="header">
      <th>Имя</th>
      <th>Модель</th>
      <th>Производитель</th>
      <th>Стоимость в кредит</th>
      <th>Длина</th>
      <th>Макс. скорость</th>
      <th>Экипаж</th>
      <th>Пассажиры</th>
      <th>Грузоподьемность</th>
      <th>Расходные</th>
      <th>Рейтинг гипердрайва</th>
      <th>MGLT</th>
      <th>Класс</th>
      <th>Пилоты</th>
      <th>Фильмы</th>
      <th>Дата создания</th>
      <th>Дата изминения</th>
    </tr>
    <template slot="row" slot-scope="props">
      <td>
        <router-link :to="{path: getPath(props.index), params: {index: props.index}}">
          {{ props.name }}
        </router-link>
      </td>
      <td>{{ props.model }}</td>
      <td>{{ props.manufacturer }}</td>
      <td>{{ props.cost_in_credits }}</td>
      <td>{{ props.length }}</td>
      <td>{{ props.max_atmosphering_speed }}</td>
      <td>{{ props.crew }}</td>
      <td>{{ props.passengers }}</td>
      <td>{{ props.cargo_capacity }}</td>
      <td>{{ props.consumables }}</td>
      <td>{{ props.hyperdrive_rating }}</td>
      <td>{{ props.MGLT }}</td>
      <td>{{ props.starship_class }}</td>
      <td>{{ props.pilots.length }}</td>
      <td>{{ props.films.length }}</td>
      <td>{{ props.created }}</td>
      <td>{{ props.edited }}</td>
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
    url: 'https://swapi.dev/api/starships/'
  }),
  methods: {
    getPath (pathIndex) {
      return `/starships/${pathIndex}`;
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
