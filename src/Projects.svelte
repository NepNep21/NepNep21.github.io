<script>
  import { mdiArrowLeft, mdiArrowRight, mdiDiscord, mdiMinecraft } from "@mdi/js";
  import { onMount } from "svelte";

  let page = 0;

  function updateDots() {
    const elements = document.getElementsByClassName("dot");
    for (const element of elements) {
      element.style.backgroundColor = "#7f7f7f";
    }
    const dot = elements.item(page);
    dot.style.backgroundColor = "white";
  }

  onMount(updateDots);
</script>

<main class="column">
  <span class="row button-row">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </span>
  <div class="row">
    <button on:click={() => {
      if (page > 0) {
          page--;
      }
      updateDots();
    }}>
      <svg viewBox="0 0 24 24" width=32px height=32px>
        <path d={mdiArrowLeft}/>
      </svg>
    </button>
    <span class="column">
      {#if page === 0}
        <svg viewBox="0 0 24 24" width=32px height=32px>
          <path d={mdiDiscord}/>
        </svg>
        <a href="https://github.com/NepNep21/DiscordRPC4j16">DiscordRPC4j16</a>
        <p>
          A java DiscordRPC library that does not require any native libraries other than the standard library itself,
          allowing it to work on all platforms discord does.
        </p>
        <img src="/media/DiscordRPCExample.png" alt="Example" width=281 height=102/>
      {:else if page === 1}
      <svg viewBox="0 0 24 24" width=32px height=32px>
        <path d={mdiMinecraft}/>
      </svg>
      <a href="https://github.com/NepNep21/MSA4Legacy">MSA4Legacy</a>
      <p>
        A set of patches for the old, pre 1.12 official minecraft launcher for adding microsoft account support,
        necessary for people who want to use it after the forced account migration starts.
      </p>
      {:else}
        <p>More projects can be found at <a href="https://github.com/NepNep21">my github</a>.</p>
      {/if}
    </span>
    <button on:click={() => {
      if (page < 2) {
        page++;
      }
      updateDots();
    }}>
      <svg viewBox="0 0 24 24" width=32px height=32px>
        <path d={mdiArrowRight}/>
      </svg>
    </button>
  </div>
</main>

<style>
  a {
    margin-bottom: 1em;
    color: aqua;
  }

  p {
    color: white;
    text-align: center;
    white-space: pre-wrap;
    margin: auto auto 2em;
  }

  .dot {
    width: 0.5em;
    height: 0.5em;
    background-color: #7f7f7f;
    border-radius: 50%;
  }
</style>
