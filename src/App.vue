<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

// Variáveis reativas
const name = ref("");
const email = ref("");
const description = ref("");
const images = [
  "./assets/galeria/1.jpeg",
  "./assets/galeria/2.jpeg",
  "./assets/galeria/3.jpeg",
  "./assets/galeria/4.jpeg",
];
// Função para enviar mensagem via WhatsApp
const sendMessage = () => {
  const message = `Olá, meu nome é ${name.value}.\nMeu email é: ${email.value}.\nDescrição: ${description.value}`;

  const phoneNumber = "5581999999999"; // Substitua pelo seu número de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};

const leftSection = ref(null);
const rightSection = ref(null);
const leftSectionAgain = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aplica a animação ao entrar na viewport
        entry.target.classList.add("animate__animated");
        if (entry.target === leftSection.value) {
          entry.target.classList.add("animate__slideInLeft");
        } else if (entry.target === rightSection.value) {
          entry.target.classList.add("animate__slideInRight");
        } else if (entry.target === leftSectionAgain.value) {
          entry.target.classList.add("animate__slideInLeft");
        }
        entry.target.classList.remove("opacity-0");
      }
    });
  });

  // Observa ambas as seções
  if (leftSection.value) {
    observer.observe(leftSection.value);
  }
  if (rightSection.value) {
    observer.observe(rightSection.value);
  }
  if (leftSectionAgain.value) {
    observer.observe(leftSectionAgain.value);
  }
});
</script>

<template>
  <section>
    <nav
      class="hidden z-50 top-0 w-full h-20 bg-primary flex items-center justify-center px-5 gap-10"
    >
      <section class="">
        <ul class="flex text-white montserrat text-xl gap-3 font-medium">
          <li class="hover:underline cursor-pointer">Sobre mim</li>
          <li class="hover:underline cursor-pointer">Contato</li>
        </ul>
      </section>
      <section class="flex items-center">
        <img
          class="w-[50px]"
          src="./assets/simbolo/rosa claro-19-8.png"
          alt=""
        />
      </section>
      <section>
        <ul class="flex text-white montserrat text-xl gap-3 font-medium">
          <li class="hover:underline cursor-pointer">Serviços</li>
          <li class="hover:underline cursor-pointer">Agende uma consulta</li>
        </ul>
      </section>
    </nav>
    <section class="flex relative w-full">
      <video
        class="pointer-events-none h-screen w-full object-cover mix-blend-darken"
        controls
        autoplay
        loop
        muted
      >
        <source src="./assets/mulher-video.mp4" type="video/mp4" />
        <source src="./assets/mulher-video.mp4" type="video/ogg" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div
        class="text-white flex flex-col items-center justify-center absolute top-1/4 w-full text-4xl text-center"
      >
        <img class="w-[400px]" src="./assets/logos/branco-7-8.png" alt="" />
        <p class="max-w-4xl montserrat font-bold -mt-5">
          Transforme sua vida com acompanhamento Psicológico Personalizado
        </p>
        <button
          class="bg-muted p-2 rounded-full text-white montserrat font-medium text-lg px-5 mt-5"
        >
          Agende uma consulta
        </button>
      </div>
    </section>

    <section class="flex justify-center bg-neutral">
      <section class="bg-neutral py-16 pt-16 w-full max-w-[1120px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-5 items-center"
          >
            <!-- Foto do profissional -->
            <div class="flex order-2 lg:order-1">
              <img
                src="./assets/foto-preto-e-branco.jpeg"
                alt="Profissional"
                class="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            <!-- Texto sobre o profissional -->
            <div class="bg-white p-10 rounded-lg lg:-ml-32 order-2 lg:order-1">
              <h2 class="text-4xl font-bold text-gray-800 mb-4">Lorem Ipsum</h2>
              <p class="text-lg text-[#1F1D1D] mb-6">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <p class="text-lg text-[#1F1D1D] mb-6">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <button
                class="bg-muted text-white p-2 rounded-full text-lg px-5 mt-5 font-medium montserrat"
              >
                Agende uma consulta
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hidden bg-accent justify-center">
      <section class="bg-accent pt-5 w-full max-w-[1120px] h-[500px]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-bold text-white text-start mb-12 w-full">
            Conheça os serviços para você
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div
              class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center"
                >
                  <!-- Ícone do serviço (exemplo de ícone de escuta ativa) -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 9.5V5.95a3.95 3.95 0 10-6 0V9.5"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">
                Escuta Ativa
              </h3>
              <p class="text-gray-600 text-center">
                Oferecemos um ambiente seguro e acolhedor para ouvir suas
                preocupações e ajudá-lo a encontrar o caminho para a recuperação
                emocional.
              </p>
            </div>

            <!-- Card 2 -->
            <div
              class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center"
                >
                  <!-- Ícone do serviço (exemplo de terapia individual) -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 4h4v4h-4zM10 12h4v4h-4zM4 8h4v4H4zM16 8h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">
                Terapia Individual
              </h3>
              <p class="text-gray-600 text-center">
                Acompanhamento terapêutico personalizado para ajudá-lo a lidar
                com desafios emocionais e promover autoconhecimento e bem-estar.
              </p>
            </div>

            <!-- Card 3 -->
            <div
              class="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center"
                >
                  <!-- Ícone do serviço (exemplo de suporte familiar) -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 18v-3a9 9 0 0118 0v3M9 9a3 3 0 11-6 0 3 3 0 016 0zm9 0a3 3 0 11-6 0 3 3 0 016 0zM9 15l3 3m0 0l3-3m-3 3V12"
                    />
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">
                Suporte Familiar
              </h3>
              <p class="text-gray-600 text-center">
                Apoio para famílias em momentos de crise, ajudando a fortalecer
                laços e desenvolver novas formas de comunicação e compreensão
                mútua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="flex justify-center bg-primary py-10">
      <section
        class="flex lg:flex-row flex-col items-center justify-between gap-10 w-full max-w-[1120px] px-5 lg:px-0"
      >
        <div class="flex flex-col w-full">
          <div class="flex items-center gap-2">
            <div class="flex items-center">
              <img
                class="w-10"
                src="./assets/simbolo/rosa escuro-20-8.png"
                alt=""
              />
            </div>
            <div class="flex flex-col leading-4">
              <h2 class="text-2xl text-white montserrat font-medium">
                Entre em contato!
              </h2>
              <p class="text-md text-white montserrat font-light">
                Se preferir pode entrar em contato pelo instagram
              </p>
            </div>
          </div>

          <form @submit.prevent="sendMessage" class="w-full pt-5">
            <!-- Nome -->
            <div>
              <label
                for="name"
                class="block text-white font-normal montserrat text-md"
                >Nome / Nome social</label
              >
              <input
                type="text"
                id="name"
                v-model="name"
                required
                class="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <!-- Descrição -->
            <div>
              <label
                for="description"
                class="block text-white font-normal montserrat text-md pt-3"
                >Envie uma mensagem
              </label>
              <textarea
                id="description"
                v-model="description"
                rows="4"
                required
                class="w-full p-1 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
              </textarea>
            </div>

            <!-- Botão Enviar -->
            <div class="pt-3">
              <button
                type="submit"
                class="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar Mensagem <i class="fa-brands fa-whatsapp"></i>
              </button>
            </div>
          </form>
        </div>

        <section>
          <iframe
            class="rounded-lg h-[350px]"
            id="frame"
            width="420"
            height="350"
            src="https://www.instagram.com/p/C6KQAzApuSI/embed"
            frameborder="0"
          ></iframe>
        </section>
      </section>
    </section>

    <section class="py-12 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-8 gap-3">
          <img
            class="w-10"
            src="./assets/simbolo/azul escuro -16-8.png"
            alt=""
          />
          <h2 class="text-3xl font-bold text-start text-[#1F1D1D] montserrat">
            Nosso espaço
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            class="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="./assets/galeria/1.jpeg"
              alt="Galeria de Fotos"
              class="w-full h-[350px] object-cover"
            />
          </div>
          <div
            class="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="./assets/galeria/2.jpeg"
              alt="Galeria de Fotos"
              class="w-full h-[350px] object-cover"
            />
          </div>
          <div
            class="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="./assets/galeria/3.jpeg"
              alt="Galeria de Fotos"
              class="w-full h-[350px] object-cover"
            />
          </div>
          <div
            class="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src="./assets/galeria/4.jpeg"
              alt="Galeria de Fotos"
              class="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="hidden w-full justify-center bg-neutral py-5">
      <section
        class="flex flex-col items-center justify-center bg-neutral py-12"
      >
        <div
          ref="leftSection"
          class="flex items-center justify-start text-center opacity-0"
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Avatar 1"
            class="w-24 h-24 rounded-full mx-auto mb-4 floating-animation bg-white m-3"
          />
          <div
            class="relative bg-green-100 text-gray-600 p-4 rounded-lg max-w-lg shadow-lg mx-5"
          >
            <p class="leading-5 text-lg montserrat font-light">
              O atendimento foi excelente! Resolveram todos os meus problemas de
              forma rápida e eficiente. Muito satisfeito com o serviço prestado.
            </p>

            <!-- Triângulo do balão apontando para a imagem -->
            <div
              class="absolute left-0 top-5 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-green-100"
            ></div>
          </div>
        </div>

        <div
          ref="rightSection"
          class="flex flex-row-reverse items-center justify-starttext-center opacity-0"
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Avatar 2"
            class="w-24 h-24 rounded-full mx-auto mb-4 floating-animation bg-white m-3"
          />
          <div
            class="relative bg-green-100 text-gray-600 p-4 rounded-lg max-w-lg shadow-lg mx-5"
          >
            <p class="leading-5 text-lg montserrat font-light">
              O atendimento foi excelente! Resolveram todos os meus problemas de
              forma rápida e eficiente. Muito satisfeito com o serviço prestado.
            </p>

            <!-- Triângulo do balão apontando para a imagem -->
            <div
              class="absolute right-0 top-5 transform translate-x-1/2 -translate-y-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-green-100"
            ></div>
          </div>
        </div>

        <div
          ref="leftSectionAgain"
          class="flex items-center justify-start text-center opacity-0"
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Avatar 1"
            class="w-24 h-24 rounded-full mx-auto mb-4 floating-animation bg-white m-3"
          />
          <div
            class="relative bg-green-100 text-gray-600 p-4 rounded-lg max-w-lg shadow-lg mx-5"
          >
            <p class="leading-5 text-lg montserrat font-light">
              O atendimento foi excelente! Resolveram todos os meus problemas de
              forma rápida e eficiente. Muito satisfeito com o serviço prestado.
            </p>

            <!-- Triângulo do balão apontando para a imagem -->
            <div
              class="absolute left-0 top-5 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-green-100"
            ></div>
          </div>
        </div>
      </section>
    </section>

    <footer class="flex justify-center bg-primary text-white py-8">
      <div
        class="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1120px] gap-5"
      >
        <div class="flex flex-col">
          <div class="">
            <img src="./assets/off-white-11-8.png" class="w-40" alt="" />
          </div>
          <!-- Redes sociais -->
          <div class="flex gap-2 w-full items-center justify-center">
            <i class="fa-brands fa-whatsapp text-2xl"></i>
            <i class="fa-brands fa-instagram text-2xl"></i>
          </div>
        </div>

        <div class="text-center mb-6 flex">
          <ul class="montserrat flex flex-col items-center lg:items-start">
            <!-- <li class="text-lg font-bold">Links Úteis</li> -->
            <li class="hover:underline">
              <a
                href="https://uniceuma-my.sharepoint.com/personal/coordenacao_psicologia-slz_ceuma_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordenacao%5Fpsicologia%2Dslz%5Fceuma%5Fbr%2FDocuments%2FLAN%C3%87AMENTO%20DE%20LIVROS%202023%2E2%20PSICOLOGIA%2FLIVRO%20SAUDE%20IV"
              >
                Cannabis Medicional e Saúde Mental
              </a>
            </li>
            <li class="hover:underline">
              <a href="https://forms.gle/sS6Y6iSc3iu8UkWbA">
                Incrição TRAINING INDOOR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <section class="bg-secondary flex justify-center py-1">
      <div class="text-center text-white roboto-light text-xs">
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </div>
    </section>

    <section class="relative">
      <a
        href="https://wa.me/5581999999999"
        target="_blank"
        class="fixed bottom-8 right-8 rounded-full"
      >
        <i
          class="fa-brands fa-whatsapp text-[40px] text-green-400 bg-white rounded-full py-3 px-4 shadow shadow-light-400"
        ></i>
      </a>

      <!-- Botão Flutuante para WhatsApp -->
    </section>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.floating-animation {
  animation: float 3s ease-in-out infinite;
}
</style>
