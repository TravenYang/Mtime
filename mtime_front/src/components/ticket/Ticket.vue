<template>
  <div class="ticket">
    <router-link to="/ticket/choose_movie">
      <TicketItem></TicketItem>
    </router-link>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>
    <TicketItem></TicketItem>

  </div>
</template>

<script type="text/ecmascript-6">
  import TicketItem from 'components/ticketItem/TicketItem';
  export default{
    components:{
      TicketItem
    }
  };
</script>

<style lang="scss">

</style>
