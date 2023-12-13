<script>
  import { mdiGithub, mdiSteam, mdiDiscord, mdiMatrix, mdiMastodon, mdiKey } from "@mdi/js";
  import { toasts } from "svelte-toasts";
  
  function discordClipboard() {
    clipAndToast("@nepnepcat");
  }

  async function fediClipboard() {
    const a = await fetch("https://social.bottomservices.club/_nep/user").then(resp => resp.text());

    clipAndToast(a);
  }

  function clipAndToast(txt) {
    navigator.clipboard.writeText(txt);

    toasts.add({ title: "Copied!", description: "", duration: 3000, type: "success" });
  }
</script>
  
<main class="column">
  <h4>
    Hewwo, I'm Nep, I'm 17, bi, female, and I spend most of my time playing games or working on projects :3
  </h4>
  <div id="container">
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

    <button on:click={fediClipboard} title="Copy fediverse tag">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiMastodon}/>
      </svg>
    </button>

    <a href="/key.gpg" title="PGP public key">
      <svg viewBox="0 0 24 24" width=64px height=64px>
        <path d={mdiKey}/>
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

  #container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
