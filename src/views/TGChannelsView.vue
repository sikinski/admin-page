<template>
  <div id="tg-channels" class="view flex-center">
    <div class="table-container">
      <p class="title">Реклама в группах</p>
      <table class="ad-table">
        <thead>
          <tr>
            <th v-for="headingTable of headingsTable" :key="headingTable.id">
              {{ headingTable.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rowTable of rowsTable" :key="rowTable.id">
            <td v-for="item of rowTable.c" :key="item.id">
              {{
                Object.values(item).length == 1
                  ? item.v
                  : Object.values(item)[0]
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headingsTable: [],
      rowsTable: [],
    };
  },
  methods: {
    getGoogleSheets() {
      const url = "url";

      fetch(url)
        .then((res) => res.text())
        .then((rep) => {
          const data = JSON.parse(rep.substr(47).slice(0, -2));
          data.table.cols.forEach((heading) => {
            this.headingsTable.push(heading);
          });
          console.log(data.table.rows);
          data.table.rows.forEach((main) => {
            console.log(main);
            this.rowsTable.push(main);
          });
          console.log(this.rowsTable);
        });
    },
  },
  mounted() {
    this.getGoogleSheets();
  },
};
</script>

<style lang="sass">
#tg-channels
  .table-container
    .title
      font-size: 2rem
      line-height: 2.4rem
    .ad-table
      margin: 2% 0
      border-collapse: collapse
      background-color: #fff
      thead
        background-color: #ADD8E6
      td, th
        border: 1px solid black
        text-align: center
        padding: 14px 12px
</style>
