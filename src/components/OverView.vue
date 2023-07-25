<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="title has-text-centered">OverView</p>
          <p class="subtitle has-text-danger has-text-centered">Maiores libero odio eligendi </p>
        </div>
      </div>
      <div class="columns is-centered is-4-desktop">
        <div v-for="card in cards" :key="card" class="column">
          <div class="card">
            <div class="card-content card-height">
              <div class="content">
                <nav class="level">
                  <div class="level-item border-items has-text-centered">
                    <div class="">
                      <p class="subtitle is-3 mb-4">{{ card.icon }}</p>
                      <p class="heading has-text-danger">{{ card.title }}</p>
                      <p class="title">{{ card.numbers }}</p>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="column">
                    <div class="title is-1 has-text-centered">
                        <div class="icon has-text-grey-light">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <p class="subtitle has-text-centered">
                            1,5632
                        </p>
                        <p class="subtitle is-4 is-capitalized has-text-danger has-text-centered">
                            reactions people's
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="title is-1 has-text-centered">
                        <div class="icon has-text-grey-light">
                            <i class="fa-regular fa-thumbs-up"></i>
                        </div>
                        <p class="subtitle has-text-centered">
                            2,532
                        </p>
                        <p class="subtitle is-4 is-capitalized has-text-danger has-text-centered">
                            Likes
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="title has-text-centered">
                        <div class="icon has-text-grey-light">
                            <i class="fa-solid fa-comments"></i>
                        </div>
                        <p class="subtitle has-text-centered">
                            55,632
                        </p>
                        <p class="subtitle is-4 is-capitalized has-text-danger has-text-centered">
                            people's comments
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="title has-text-centered">
                        <div class="icon has-text-grey-light">
                            <i class="fa-solid fa-home"></i>
                        </div>
                        <p class="subtitle has-text-centered">
                            22,412
                        </p>
                        <p class="subtitle is-4 is-capitalized has-text-danger has-text-centered">
                            number of visits
                        </p>
                    </div>
                </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        icon: "❤",
        numbers: "20,532",
        title: "number of likes",
      },
      {
        icon: "💭",
        numbers: "456K",
        title: "peoples comments",
      },
      {
        icon: "🏘",
        numbers: "88,563",
        title: "number of visits",
      },
    ],
  }),
};
</script>

<style>

</style>