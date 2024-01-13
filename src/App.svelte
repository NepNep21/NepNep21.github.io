<script>
  import About from "./About.svelte";
  import { mdiAccount, mdiCodeTags, mdiCurrencyUsd, mdiHeart } from "@mdi/js";
  import { onMount } from "svelte";
  import Projects from "./Projects.svelte";
  import Heresy from "./Heresy.svelte";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { clipAndToast } from "./util"

  let page = 0;

  function updateDots() {
    const elements = document.getElementsByClassName("dot-top");
    for (const element of elements) {
      element.style.backgroundColor = "#7f7f7f";
    }
    const dot = elements.item(page);
    dot.style.backgroundColor = "white";
  }

  onMount(updateDots);
</script>

<main>
  <ToastContainer placement="top-center" let:data={data}>
    <FlatToast {data} />
  </ToastContainer>
  <div class="root-wrapper">
    <span class="row button-row">
      <span class="dot-top"></span>
      <span class="dot-top"></span>
      <span class="dot-top"></span>
      <span class="dot-top"></span>
    </span>
    <span class="row-break"></span>
    <div id="navbar">
      <span class="pageIcon">
        <h1>About</h1>
        <button class="pageButton" on:click={() => {
           page = 0;
           updateDots();
        }} aria-label="Account page">
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiAccount}/>
          </svg>
        </button>
      </span>
    
      <span class="pageIcon">
        <h1>Projects</h1>
        <button class="pageButton" on:click={() => {
          page = 1;
          updateDots();
        }} aria-label="Projects page">
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiCodeTags}/>
          </svg>
        </button>
      </span>
      <span class="pageIcon">
        <h1>?</h1>
        <button class="pageButton" on:click={() => {
          page = 2;
          updateDots();
        }} aria-label="Heresy...">
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiHeart}/>
          </svg>
        </button>
      </span>

      <span class="pageIcon">
        <h1>Support</h1>
        <button class="pageButton" on:click={() => {
          page = 3;
          updateDots();
        }} aria-label="Financial support page">
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiCurrencyUsd}/>
          </svg>
        </button>
      </span>
    </div>
  
    <span class="row-break"></span>

    {#if page === 0}
      <About/>
    {:else if page === 1}
      <Projects/>
    {:else if page === 2}
      <Heresy/>
    {:else if page === 3}
      <div class="column" style="gap: 0.5em; margin-bottom: 1em;">
        <button on:click={() => clipAndToast("bc1q9wjqskt6gx9su0jpk5uxuce5htzxv6xznqv98a")} class="address">
          Copy bitcoin address
        </button>
        <button on:click={() => clipAndToast("4ASxnoi3pkU557rzyASBbeA3anZ1QyB216Gnee6JUJHAd1DZ9jsRsG3RemLnhdFeA33ojU1xKWgVEGdKnwka8cJB3tqXkZN")} class="address">
          Copy monero address
        </button>
      </div>
    {/if}

    <span class="row-break"></span>

    {#if page != 2}
      <button on:click={async () => await (new Audio("/media/Pomf.mp3").play())}>
        <img width="64" height="64" src="/media/Pomf.jpeg" alt="Pomf">
      </button>
    {/if}
  </div>
</main>

<style>
  #navbar {
    background-color: #757575;
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-bottom: 1em;
    padding-bottom: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .pageIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pageButton {
    transition: filter 1s;
  }

  .pageButton:hover {
    filter: invert(20%);
  }

  .root-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 2em;
  }

  .row-break {
    flex-basis: 100%;
  }

  .dot-top {
    width: 0.5em;
    height: 0.5em;
    background-color: #7f7f7f;
    border-radius: 50%;
  }

  .address {
    height: 4em;
    background-color: #757575;
    transition: background-color 1s;
  }

  .address:focus {
    background-color: #505050;
  }

  .address:hover {
    background-color: #505050;
  }
</style>
