<script>
  let a = 10;
  let b = 5;
  let total = 0;

  async function add() {
    const response = await fetch("/processCharts/10", {
      method: "POST",
      body: JSON.stringify({ a, b }),
      headers: {
        "content-type": "application/json",
      },
    });

    const result = await response.json();
    total = result.sum;
  }
</script>

<input type="number" bind:value={a} /> +
<input type="number" bind:value={b} /> =
{total}

<button on:click={add}>Calculate</button>
