<script>
  import About from "./About.svelte";
  import { mdiAccount, mdiCodeTags } from "@mdi/js";
  import { onMount } from "svelte";
  import Projects from "./Projects.svelte";

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
  <div class="root-wrapper">
    <span class="row button-row">
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
        }}>
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
        }}>
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiCodeTags}/>
          </svg>
        </button>
      </span>
    </div>
  
    <span class="row-break"></span>

    {#if page === 0}
      <About/>
    {:else if page === 1}
      <Projects/>
    {/if}
  </div>
</main>

<style>
  #navbar {
    background-color: #757575;
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-bottom: 3em;
    padding-bottom: 1em;
    padding-left: 0.5em;
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
</style>