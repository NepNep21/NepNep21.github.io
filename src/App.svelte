<script>
  import About from "./About.svelte";
  import { mdiAccount, mdiCodeTags } from "@mdi/js";
  import Projects from "./Projects.svelte";

  let page = "About";
</script>

<main>
  <div class="root-wrapper">
    <div id="navbar">
      <span class="pageIcon">
        <h1>About</h1>
        <button class="pageButton" on:click={() => page = "About"}>
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiAccount}/>
          </svg>
        </button>
      </span>
    
      <span class="pageIcon">
        <h1>Projects</h1>
        <button class="pageButton" on:click={() => page = "Projects"}>
          <svg viewBox="0 0 24 24" width=32px height=32px>
            <path d={mdiCodeTags}/>
          </svg>
        </button>
      </span>
    </div>
  
    <div class="row-break"></div>

    {#if page === "About"}
      <About/>
    {:else if page === "Projects"}
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
</style>