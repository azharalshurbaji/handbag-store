<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="title has-text-centered">Contact Us</p>
          <p class="subtitle has-text-danger has-text-centered">
            Maiores libero odio eligendi
          </p>
        </div>
      </div>
      <div class="columns is-centered is-vcentered">
        <div class="column is-5-desktop">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="your email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="password"
                placeholder="your password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <textarea
                class="textarea"
                placeholder="your message"
              />
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-danger is-fullwidth is-responsive">
                Sand Message
              </button>
            </p>
          </div>
        </div>

        <div class="column is-hidden-mobile pl-6 is-5-desktop">
            <img src="../assets/img/c6.png" alt="c6">
            <!-- <p class="title">let's work together...</p>
            <p class="subtitle">how do you take <span class="has-text-danger">your coffee</span>?</p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>