<template>
  <div class="NewsList">
    <h1>Новости</h1>
    <div class="NewsList__list">
      <ArticleCard
        v-for="(article, n) in articles"
        :key="n"
        :article="article"
      />
    </div>
    <div
      class="NewsList__more"
      :data-hidden="articles.length < 5 ? '' : undefined"
    >
      <button
        class="button"
        type="button"
        @click="loadMore"
        v-text="'Хочу ещё'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '../../components/ArticleCard/ArticleCard.vue';

const articles = [
  {
    id: '654095b7ae3000209ccddbea',
    creationDate: '2023-10-31T05:50:47.5930000Z',
    authorId: '6022060fed362617f2e89afa',
    title: '123123123123123',
    summary: '123123',
    previewPictureWebp: null,
    active: true,
    viewsCount: 2,
    deleted: null,
    adminName: 'pandora_adm',
  },
  {
    id: '654093fc3f3a069d66d21f69',
    creationDate: '2023-10-31T05:43:24.3700000Z',
    authorId: '635f909ec9565558135f36c9',
    title: 'Лалалала ',
    summary: null,
    previewPictureWebp: null,
    active: true,
    viewsCount: 7,
    deleted: null,
    adminName: 'Zanozina',
  },
  {
    id: '64c0c3480c41d029011980a6',
    creationDate: '2023-07-26T06:55:04.3070000Z',
    authorId: '5ec5f1413b2be200016b1a05',
    title: '– Не надо, – ответил мастер, – я помню его наизусть.',
    summary: '– Но ты ни слова... ни слова из него не забудешь? ',
    previewPictureWebp: null,
    active: true,
    viewsCount: 8,
    deleted: null,
    adminName: 'MNS',
  },
  {
    id: '644b6794be625f18c2bc1aac',
    creationDate: '2023-04-28T06:28:36.4430000Z',
    authorId: '63f326ba7636435183a95ad0',
    title: 'рр',
    summary: 'Контекстная рекламаРазделяется на несколько типов:',
    previewPictureWebp: null,
    active: true,
    viewsCount: 2,
    deleted: null,
    adminName: 'Oppai',
  },
  {
    id: '644b665dbe625f18c2bc1aaa',
    creationDate: '2023-04-28T06:23:25.1410000Z',
    authorId: '63f326ba7636435183a95ad0',
    title: 'Контекстная рекламаРазделяется на несколько типов:',
    summary: null,
    previewPictureWebp:
      'https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg',
    active: true,
    viewsCount: 0,
    deleted: null,
    adminName: 'Oppai',
  },
  {
    id: '644b608b9f5daba5dc1879d2',
    creationDate: '2023-04-28T05:58:35.1050000Z',
    authorId: '6294849cec73b1b24ddbc1d0',
    title: 'dsdadasd',
    summary: 'dasdadad',
    previewPictureWebp: null,
    active: true,
    viewsCount: 2,
    deleted: null,
    adminName: 'naidenov',
  },
  {
    id: '644b5fd3e53e368c25a1dc09',
    creationDate: '2023-04-28T05:55:31.2100000Z',
    authorId: '6294849cec73b1b24ddbc1d0',
    title: 'sadasd',
    summary: 'adsdads',
    previewPictureWebp: null,
    active: true,
    viewsCount: 0,
    deleted: null,
    adminName: 'naidenov',
  },
  {
    id: '63a18050b376053b35477d17',
    creationDate: '2022-12-20T09:28:48.0810000Z',
    authorId: '5ec5f1413b2be200016b1a05',
    title: 'Тут прибавились новые и очень интересные данные',
    summary:
      'На московском аэродроме совершил посадку шестиместный пассажирский самолет',
    previewPictureWebp:
      'https://i.ucrazy.ru/files/pics/2023.10/2023-10-17-21-53-072.webp',
    active: true,
    viewsCount: 22,
    deleted: null,
    adminName: 'MNS',
  },
  {
    id: '63a178a916571afcc3b8e2bd',
    creationDate: '2022-12-20T08:56:09.5920000Z',
    authorId: '620c85342a698e43b7ac0264',
    title: 'ЙЙЙЦЦЦЦ',
    summary: 'Отключить анимацию после загрузки картинки',
    previewPictureWebp:
      'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
    active: true,
    viewsCount: 3,
    deleted: null,
    adminName: 'neadmin',
  },
  {
    id: '638dc90f9c3bf47f866914b9',
    creationDate: '2022-12-05T10:33:51.2890000Z',
    authorId: '6022060fed362617f2e89afa',
    title: 'хочу письмо',
    summary: 'хочу письмо',
    previewPictureWebp:
      'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
    active: true,
    viewsCount: 1,
    deleted: null,
    adminName: 'pandora_adm',
  },
];

const loadMore = async () => {};
</script>

<style lang="less">
@import '@/style/colors';
@import '@/style/vars';

.NewsList {
  &__list {
    .ArticleCard {
      &:not(:first-child) {
        margin-top: 30px;
      }
    }
  }

  &__more {
    margin-top: 30px;
    text-align: center;

    &[data-hidden] {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
  }
}
</style>
