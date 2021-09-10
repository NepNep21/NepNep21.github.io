<script>
  import {mdiGithub, mdiSteam, mdiDiscord} from "@mdi/js";

  function discordClipboard() {
    navigator.clipboard.writeText("Nep Nep#3025");
  }
</script>

<main>
  <h4>
    Hello, i'm nep (not real name), i'm 14, pan, male, and i spend most of my time playing games or working on projects :3
  </h4>
  <!--viewBox from rain, AGPL-->
  <a href="https://github.com/NepNep21" title="My github">
    <svg viewBox="0 0 24 24" width=64px height=64px style="filter: invert(100%);">
      <path d={mdiGithub}>
    </svg>
  </a>

  <a href="https://steamcommunity.com/profiles/76561198303469579" title="My steam">
    <svg viewBox="0 0 24 24" width=64px height=64px>
      <path d={mdiSteam}>
    </svg>
  </a>

  <button on:click={discordClipboard} title="Copy discord tag">
    <svg viewBox="0 0 24 24" width=64px height=64px>
      <path d={mdiDiscord}>
    </svg>
  </button>
</main>

<style>
  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  h4 {
    color: white;
    /*:trollcrazy:*/
    flex-basis: 100%;
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    h4 {
      color: white;
      /*:trollcrazy:*/
      flex-basis: 100%;
      white-space: normal;
    }
  }
  
  /* Not needed
  #center a {
    display: inline;
  }*/

  button {
    cursor: pointer;
    background-color: #212121;
    border: none;
  }
</style>
