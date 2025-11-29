import type { Meta, StoryObj } from '@storybook/react';

import { ChatMessage } from './chat-message';

const meta = {
  component: ChatMessage,
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageWithLinks: Story = {
  args: {
    message: {
      text: `
        Hello, My name is WebLLM!
        The link of the repo is https://github.com/MaxiGarcia13/web-llm-chat, you can try it out!
        Check out the documentation for more information at https://github.com/MaxiGarcia13/web-llm-chat/blob/main/README.md


        You can contact me at https://github.com/MaxiGarcia13 or [here](https://github.com/MaxiGarcia13)
      `,
      timestamp: Date.now(),
      role: 'assistant',
    },
  },
};

export const MessageWithCodeLanguage: Story = {
  args: {
    message: {
      text: `
      To decaler a variable in javascript you can use the keyword \`let\`

      \`\`\`
      let myVariable = 'Hello, World!';
      \`\`\`

      \`\`\`
      function myFunction() {
        return 'Hello, World!';
      }
      \`\`\`
      `,
      timestamp: Date.now(),
      role: 'assistant',
    },
  },
};

export const MessageMarkdown: Story = {
  args: {
    message: {
      text: `
      # Example h1
      ## Example h2
      ### Example h3
      #### Example h4
      ##### Example h5
      ###### Example h6

      - Example list item 1
        - Example list item 1.1
        - Example list item 1.2
      - Example list item 2
      - Example list item 3

      1. Example list item 1
      2. Example list item 2
      3. Example list item 3

      **Bold**
      *Italic*
      `,
      timestamp: Date.now(),
      role: 'assistant',
    },
  },
};
