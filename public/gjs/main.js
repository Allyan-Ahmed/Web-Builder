let editor = grapesjs.init({
  container: "body",
  fromElement: true,
  width: "auto",
  storageManager: false,
  plugins: ["gjs-preset-webpage"],
  pluginsOpts: {
    "gjs-preset-webpage": {},
  },

//   blocks: {
//     // Define your custom block
//     'my-grape-block': {
//       label: 'Grape Block', // Label displayed in block manager
//       content: `
//           <div class="grape-block">
//             <img src="path/to/your/grape.png" alt="Grape Image">
//             <h2>Grapes!</h2>
//             <p>A delicious and healthy fruit.</p>
//           </div>
//         `,
//       style: `
//           .grape-block {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             padding: 1rem;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//           }
//           .grape-block img {
//             width: 100px;
//             height: auto;
//             margin-bottom: 1rem;
//           }
//         `
//     }
//   }
});
// });





// editor.addComponents(`<div>hello world</div>`);



// export default {
//   type: 'custom-header',
//   model: {
//     defaults: {
//       tagName: 'div',
//       draggable: true,
//       resizable: true,
//       badgable: true,
//       stylable: true,
//       hoverable: true,
//       selectable: true,
//       traits: [
//         {
//           type: 'text',
//           name: 'header-text',
//           label: 'Header Text',
//         },
//       ],
//     },
//   },
//   view: {
//     tagName: 'div',
//     template: '<div class="custom-header">{{ header-text }}</div>',
//   },
// };

// editor = grapesjs.init({
//   // ...
//   components: [
//     {
//       name: 'custom-header',
//       component: require('./custom-component'),
//     },
//   ],
//   // ...
// });

// editor = grapesjs.init({
//   // ...
//   toolbar: {
//     buttons: [
//       {
//         id: 'custom-header',
//         label: 'Custom Header',
//         command: 'add-custom-header',
//       },
//     ],
//   },
//   // ...
// });
// editor = grapesjs.init({
//   // ...
//   commands: {
//     'add-custom-header': {
//       run: (editor) => {
//         const component = editor.Components.add('custom-header');
//         editor.Canvas.add(component);
//       },
//     },
//   },
//   // ...
// });


// // ...
// // });
// avoidInlineStyle: true
// canvas: {
//   styles: './assets/css/style.css'
// }


// // editor.Css.showCodeView(); // This line shows the CSS code view

// // This code ensures the CSS code view is positioned appropriately
// editor.on('ready', () => {
//   const codeView = editor.Css.getCodeView();
//   codeView.parentNode.style.position = 'absolute';
//   codeView.parentNode.style.top = '0';
//   codeView.parentNode.style.right = '0';
//   codeView.parentNode.style.width = '300px'; // Adjust width as needed
//   codeView.parentNode.style.height = '100%'; // Adjust height as needed
// });
