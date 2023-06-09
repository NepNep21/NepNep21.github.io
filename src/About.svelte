<script>
  import { mdiGithub, mdiSteam, mdiDiscord, mdiMatrix } from "@mdi/js";
  
  function discordClipboard() {
    navigator.clipboard.writeText("@nepnepcat");
  }
</script>
  
<main class="column">
  <h4>
    Hewwo, I'm Nep, I'm 16, bi (myself), female, and I spend most of my time playing games or working on projects :3
  </h4>
  <div style="flex-direction: row;">
    <!--viewBox from rain, AGPL-->
    <a href="https://github.com/NepNep21" title="My github">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiGithub}/>
      </svg>
    </a>
  
    <a href="https://steamcommunity.com/profiles/76561198303469579" title="My steam">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiSteam}/>
      </svg>
    </a>
  
    <button on:click={discordClipboard} title="Copy discord tag">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiDiscord}/>
      </svg>
    </button>

    <a href="https://matrix.to/#/@nep_nep:matrix.bottomservices.club" title="Matrix">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiMatrix}/>
      </svg>
    </a>
  </div>
</main>
  
<style>  
  h4 {
    color: white;
    font-weight: bold;
    margin: 0 1em;
  }
</style>
