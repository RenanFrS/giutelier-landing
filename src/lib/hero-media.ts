export type HeroMedia =
  | {
      kind: 'image'
      desktop: string
      mobile: string
      alt: string
    }
  | {
      kind: 'video'
      desktop: string
      mobile: string
      desktopType?: string
      mobileType?: string
      poster?: string
    }

export const HERO_MEDIA: HeroMedia = {
kind: 'video',
//desktop:
//'https://player.vimeo.com/progressive_redirect/playback/1188351158/rendition/1440p/file.mp4%20%281440p%29.mp4?loc=external&oauth2_token_id=1805184416&signature=df729f532996fb13ee2b0ffa6b1a7fff781086fe8235d111cbad052a1bb29444',
//mobile:
//'https://player.vimeo.com/progressive_redirect/playback/1188351146/rendition/1440p/file.mp4%20%281440p%29.mp4?loc=external&oauth2_token_id=1805184416&signature=aadb3f874a4fe5a8144079cd52bb0934656058c1c021090b212226c0776d8b7f',
//poster: '/banner/giutelier-hero-editorial-desktop.png',
//}

// Para usar imagem, troque o objeto acima por:
//export const HERO_MEDIA: HeroMedia = {
   //kind: 'image',
   //desktop: '/banner/giutelier-hero-editorial-desktop.png',
  // mobile:  '/banner/giutelier-hero-editorial-mobile.png',
   //alt:     'Editorial Giutelier',
 //}
//
// Para usar vídeo local, basta apontar para arquivos em /public:
desktop: '/banner/giu-constroi-desk.mp4',
mobile:  '/banner/giu-constroi.mp4',
}
