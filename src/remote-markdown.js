export function getFile(target) {
  return Promise
    .resolve()
    .then(() => fetch(target))
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.text();
    })
}

export function install(hook, vm) {
  const config = Object.assign({}, {
		tag: 'remoteMarkdownUrl',
	}, vm.config.remoteMarkdown);

  hook.beforeEach(function (content, next) {
    const reg = new RegExp(`\\[${config.tag}\\]\\((http|https://.+)\\)`);
    const result = content.match(reg);

    if (result && result[1]) {
      const targetFile = result[1];
      getFile(targetFile)
        .then((data) => next(content.replace(reg, `\n ${data} \n`)))
        .catch((err) => console.error(err));
    } else {
      next(content);
    }
  });
}
