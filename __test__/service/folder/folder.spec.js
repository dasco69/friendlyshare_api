'use strict'

jest.mock('fs')

describe('test creation folder', ()=> {

    beforeEach(() => {
        // Préparation d'informations simulées sur les fichiers avant chaque test.
        require('fs').__setMockFiles(MOCK_FILE_INFO);
      })
      
    it('folder create', ()=> {
        // expect("./public/albums").toBe(4)
    })
})