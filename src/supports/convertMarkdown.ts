export function convertMarkdown(str: string) {
  str = replaceUnorderedList(str);
  str = replaceOrderedList(str);
  str = strToLink(str);
  str = replaceHeadering(str);
  str = replaceBold(str);
  str = replaceItalic(str);

  str = str.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code) => {
    const langClass = lang ? `language-${lang}` : '';
    return `<pre><code class="bg-gray-200 flex flex-col rounded px-6 py-4 my-2 ${langClass}">${code}</code></pre>`;
  });
  str = str.replace(/`([^`]+)`/g, '<code class="bg-gray-200 p-1 rounded my-2">$1</code>');

  return str;
}

function strToLink(str: string) {
  const urlRegex = /(?<!\]\()https?:\/\/(www\.)?[-\w@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-\w()@:%+.~#?&/=]*)/g;
  const urlMarkdown = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  return str
    .replace(urlRegex, url => `<a href="${url}" target="_blank" class="text-blue-500">${url}</a>`)
    .replace(urlMarkdown, (_, text, url) => {
      return `<a href="${url}" target="_blank" class="text-blue-500">${text}</a>`;
    });
}

function replaceHeadering(str: string) {
  return str.replace(/(#{1,6})(.*)/g, (content, header) => {
    const level = header.length;

    const className: Record<number, string> = {
      1: 'text-3xl font-bold',
      2: 'text-2xl font-bold',
      3: 'text-xl font-bold',
      4: 'text-lg font-bold',
      5: 'text-base font-bold',
      6: 'text-sm font-bold',
    };

    return `<h${level} id="${content}" class="${className[level]}">${content.replace(header, '').trim()}</h${level}>`;
  });
}

function replaceBold(str: string) {
  return str.replace(/(\*\*|__)(.*?)\1/g, (_1, _2, text) => {
    return `<strong class="font-bold">${text}</strong>`;
  });
}

function replaceItalic(str: string) {
  return str.replace(/(\*|_)(.*?)\1/g, (_1, _2, text) => {
    return `<em class="font-italic">${text}</em>`;
  });
}

function replaceUnorderedList(str: string) {
  const matches = str.match(/- (.*)/g);

  if (!matches) return str;

  matches.forEach((text, index) => {
    const item = `<li>${text.replace(/^- /, '')}</li>`;
    if (index === 0) {
      str = str.replace(text, `<ul class="list-disc">${item}`);
    } else if (index === matches.length - 1) {
      str = str.replace(text, `${item} </ul>`);
    } else {
      str = str.replace(text, item);
    }
  });

  return str;
}

function replaceOrderedList(str: string) {
  const matches = str.match(/[1-9]\. (.*)/g);

  if (!matches) return str;

  matches.forEach((text, index) => {
    const item = `<li>${text.replace(/^[1-9]\. /, '')}</li>`;
    if (index === 0) {
      str = str.replace(text, `<ol class="list-decimal">${item}`);
    } else if (index === matches.length - 1) {
      str = str.replace(text, `${item} </ol>`);
    } else {
      str = str.replace(text, item);
    }
  });

  return str;
}
