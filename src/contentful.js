import React from 'react';
import * as contentful from 'contentful'

var client = contentful.createClient({
  space: 'qu10m4oq2u62',
  accessToken: 'f4a9f68de290d53552b107eb503f3a073bc4c632f5bdd50efacc61498a0c592a'
})
  
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

