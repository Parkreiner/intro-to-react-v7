function titlecase(str) {
  const articleRe = /^(?:a|an|the)$/i;
  const prepositionRe = /^(?:for|from|[uoi]nto|in|to|of|at|by)$/;

  return str
    .split(/\b\s+/)
    .map((str) => str.trim())
    .filter((word) => word.length > 0)
    .map(formatWordChunk)
    .join(" ");

  ////////// Start of internal helpers

  function formatWordChunk(chunk, index) {
    const shouldBeLowerCase = articleRe.test(chunk) || prepositionRe.test(chunk);
    if (index > 0 && shouldBeLowerCase) {
      return chunk.toLowerCase();
    }

    return chunk[0].toUpperCase() + chunk.slice(1).toLowerCase();
  }
}

export { titlecase };
