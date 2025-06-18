import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts/"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'Nachara']

Deno.test("Testes de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais"],
        "Opa! Algo deu errado!");
})
