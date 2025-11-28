export function convertMarkdown(str: string) {
  const languages = ['javascript', 'typescript', 'python', 'java', 'c++', 'c', 'ruby', 'swift', 'go', 'rust'];

  for (let i = 0; i < languages.length; i++) {
    const language = languages[i];
    str = str.replace(/```([\s\S]*?)```/g, '<code class="bg-gray-200 p-2 flex rounded my-2">$1</code>').replace(language, '');
    str = str.replace(/`([^`]+)`/g, '<code class="bg-gray-200 p-1 rounded my-2">$1</code>').replace(language, '');
  }

  str = str.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" class="text-blue-500">$1</a>',
  );

  return str;
}
