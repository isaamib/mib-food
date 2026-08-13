# 📁 Pasta Pública - Logos e Imagens Estáticas

## Como adicionar seu logo PNG

1. **Logo da Navbar:**
   - Coloque sua imagem PNG nesta pasta com o nome: `logo.png`
   - Tamanho recomendado: 200x200px ou 400x400px (quadrado)
   - Abra o arquivo `/src/components/NavBar.jsx`
   - Procure pela linha comentada `// <img src={LOGO_IMAGE}...`
   - Descomente essa linha e comente a linha `<MibFoodLogo...` abaixo dela
   - Pronto! Seu logo PNG aparecerá na navbar

2. **Favicon (ícone da aba do navegador):**
   - Coloque sua imagem PNG nesta pasta com o nome: `favicon.png`
   - Tamanho recomendado: 32x32px, 64x64px ou 256x256px
   - O arquivo `index.html` já está configurado para usar `/favicon.png`
   - Atualize a aba do navegador (F5) para ver a mudança

## 📸 Dicas

- Use imagens PNG com fundo transparente para melhor resultado
- Certifique-se que as imagens têm boa qualidade
- Teste em diferentes resoluções de tela
- Se quiser voltar ao logo SVG original, basta comentar novamente a linha do PNG

Exemplo de estrutura:
```
public/
├── logo.png       (seu logo aqui)
├── favicon.png    (seu favicon aqui)
└── .gitkeep
```
