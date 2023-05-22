function getData(req: string | undefined, setState: any): void {
  if (req) {
    fetch(`https://httpbin.org/${req}`, {
      method: `${req.toUpperCase()}`,
    })
      .then((res) => res.json())
      .then((res) =>
        setState((prev: []) => [
          ...prev,
          {
            id: prev.length + 1,
            url: res.url,
            time: new Date().toLocaleString(),
          },
        ])
      )
      .catch((e) => console.error(e));
  }
}

export default getData;
