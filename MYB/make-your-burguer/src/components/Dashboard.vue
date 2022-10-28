<template>
  <div id="burger-table">
    <table class="table-main">
      <thead id="burger-table-heading">
        <th class="order-id">#</th>
        <th>Cliente: </th>
        <th>Pão: </th>
        <th>Carne: </th>
        <th>Opcionais: </th>
        <th>Ações: </th>
      </thead>
      <tbody id="burger-table-rows"  style="border: 1px solid red">
        <tr class="burger-table-row">
          <td class="order-number">1</td>
          <td>joao</td>
          <td>trigo</td>
          <td>maminha</td>
          <td>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </td>
          <td>
            <select name="status" class="status">
              <option value="">Selecione o status</option>
            </select>
            <button class="delete-btn">Cancelar</button>
          </td>
        </tr>
        <tr class="burger-table-row">
          <td class="order-number" style="border: 1px solid green">2</td>
          <td>joao</td>
          <td>trigo</td>
          <td>maminha</td>
          <td>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </td>
          <td>
            <select name="status" class="status">
              <option value="">Selecione o status</option>
            </select>
            <button class="delete-btn">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>
  #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row{
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }

  #burger-table-heading table,
  .burger-table-row table {
    width: 19%;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number{
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
    border-radius: 20px;
    /*-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);*/
  }
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  }

  .table-main{
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  }
</style>