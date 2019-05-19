# docsify-remote-markdown
[![npm](https://img.shields.io/npm/v/docsify-remote-markdown.svg?style=flat-square)](https://www.npmjs.com/package/docsify-remote-markdown)

## Install
1. Configure docsify-remote-markdown (optional):

    ```html
    <script>
    window.$docsify = {
      remoteMarkdown: {
        tag: 'remoteMarkdownUrl',
      },
    }
    </script>
    ```

2. Insert script into docsify document:

    ```html
    <script src="//unpkg.com/docsify-remote-markdown/dist/docsify-remote-markdown.min.js"></script>
    ```


## Usage
Write your remote-markdown code like this:

```markdown
[remoteMarkdownUrl](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
```

It will be replaced by the raw text of the url above into your doc file content.

## Options
## tag
By default, we set the tag as `remoteMarkdownUrl` for you.    
However, you can change this options as you like:

```javascript
window.$docsify = {
  remoteMarkdown: {
    tag: 'customTag',
  },
}
```

Will match the code in you doc file: 

```markdown
[customTag](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
```

## Example
- [index.html](example/index.html)
- [README.md](https://raw.githubusercontent.com/jerryc8080/docsify-remote-markdown/master/example/README.md)

# License
This project is licensed under the [MIT license](LICENSE).    
Copyright (c) JerryC Huang (huangjerryc@gmail.com)