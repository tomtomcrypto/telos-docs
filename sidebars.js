/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  // What does Telos offer and how does the EVM on top of native add an advantage
  overview: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/getting-started/Overview',
        'overview/getting-started/resources',
      ],
    },
  ],
  // Quick Start Layout A basic launch with native and EVM
  quickStart: [
    'quickstart/README',
    'quickstart/metamask_remix',
    'quickstart/native-eosio',
    'quickstart/launch_on_telos',
    'quickstart/testnet_tutorial',
    'quickstart/erc20_mintable',

  ],

  // DApps
  dapps: [
  'dapps/launch-dapp-on-tEVM',
  {
      type: 'category',
      label: 'Smart Contracts',
      collapsed: false,
      items: [
      {
        type: 'autogenerated', 
        dirName: 'dapps/smart-contracts',
      },
    ],
  }
],


  // Nodes
  nodes: [
    'nodes/Nodes and Clients',
    'nodes/Nodeos',
    'nodes/Run-A-Node',
    'nodes/TEVM-local-guide',
    'nodes/Telos_BP_Requirements',
    'nodes/types-of-nodes',
    'nodes/EOSIO-network-spinup',
    ],

  // Native Telos 
  native: [
    'native/native_telos',
    {
      type: 'category',
      label: 'Telos Native',
      collapsed: false,
      items: [
        {
          type: 'autogenerated', 
          dirName: 'native/eosio_toolkit',
        },
      ],
    },
  ],
  

  // Learn
  learn: [
    'learn/README',
    {
      type: 'category',
      label: 'Protocol Guide',
      collapsed: false,
      items: [
        {
          type: 'autogenerated', 
          dirName: 'learn/protocol_guide',
        },
      ],
    },
  ],


  // FAQ PAGE
  faq: [
    'faq/faqs',
  ],
  
   
};

module.exports = sidebars;
