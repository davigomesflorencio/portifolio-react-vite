# Templates de e-mail do EmailJS

Templates HTML do formulário de contato, com o visual do site (cores, cards arredondados, faixa com o gradiente e botão ciano). Funcionam nos temas claro e escuro dos clientes de e-mail que suportam `prefers-color-scheme` (Apple Mail, iOS e alguns webmails); nos outros, aparecem no tema claro.

| Arquivo | Para quem | Quando |
|---|---|---|
| `contact-notification.html` | Você | Alguém envia o formulário |
| `auto-reply.html` | O visitante | Logo depois, confirmando o recebimento |

Os templates ficam salvos **no painel do EmailJS**, não no site. Estes arquivos são a fonte: ao mudar o visual, edite aqui e cole de novo no painel.

## Variáveis

O formulário (`src/components/contact/contactForm.tsx`) envia três campos, usados nos templates:

| Variável | Campo |
|---|---|
| `{{user_name}}` | Nome |
| `{{user_email}}` | E-mail |
| `{{message}}` | Mensagem |

Use sempre **duas chaves** (`{{...}}`): o EmailJS escapa o conteúdo, então um HTML digitado no formulário aparece como texto. Não troque por três chaves (`{{{...}}}`), que inserem o HTML sem escapar.

## Como configurar no EmailJS

1. Acesse [dashboard.emailjs.com](https://dashboard.emailjs.com/) → **Email Templates** e abra o template usado pelo site (o ID está na variável `VITE_EMAILJS_TEMPLATE_ID`).
2. Aba **Content**:
   - **Subject:** `Nova mensagem do portfólio: {{user_name}}`
   - **Content:** clique em **Edit Content** → **Code Editor**, apague o conteúdo e cole o `contact-notification.html` inteiro.
   - **To Email:** o seu e-mail.
   - **From Name:** `Portfólio Davi Gomes Florencio`
   - **Reply To:** `{{user_email}}` (assim, responder o e-mail já vai para quem escreveu).
3. Aba **Auto-Reply** (resposta automática):
   - ative a resposta automática;
   - **Subject:** `Recebi sua mensagem, {{user_name}}!`
   - **Content:** **Code Editor** → cole o `auto-reply.html`.
   - **To Email:** `{{user_email}}`
   - **From Name:** `Davi Gomes Florencio`
   - **Reply To:** o seu e-mail.
4. **Save**, depois **Test It** para receber um e-mail de exemplo.

> A resposta automática consome envios da cota do plano do EmailJS (cada mensagem do formulário passa a gerar dois e-mails).

## Pré-visualizar localmente

Abra o arquivo no navegador: as variáveis aparecem como `{{user_name}}`. Para ver com dados de exemplo, troque as variáveis por textos de teste numa cópia do arquivo.
