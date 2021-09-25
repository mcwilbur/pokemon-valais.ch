<template>
  <div class="card-list" v-if="this.loaded_events.length > 0">
    <div class="card" v-for="(event, index) in this.loaded_events" :key="index">
      <div class="card-img">
        <img :src="event.image" />
      </div>
      <div class="card-text">
        <div class="card-header">
          <div class="card-title">
            <h3>
              <a class="post-link" :href="event.url">
                {{ event.title }}
              </a>
            </h3>
          </div>
          <div class="card-subtitle"></div>
        </div>
        <div class="card-excerpt">{{event.description}}</div>
        <div class="card-meta">{{event.date}}</div>
      </div>
    </div>
  </div>
  <!--div v-if="this.loaded_events.length > 0">
  <p v-for="(event, index) in this.loaded_events" :key="index">
    {{event}}
  </p>
  </div-->
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      loaded_events : []
    }
  },
  mounted() {
  this.$nextTick(function () {

    this.loaded_events = window.page_events;
        console.log(this.loaded_events);
  })
}
}
</script>

<style>
</style>