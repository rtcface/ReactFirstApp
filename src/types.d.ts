export interface Gifs {
  id    : string
  url   : string
  title : string
}

export interface LoadGifts {
    images:Gifs
    isLoading:boolean
}


export interface Gifts {
  id    : string
  url   : string
  title : string
  images: images  
}

interface images {
    downsized_medium : downsized_medium
}

interface downsized_medium{
    url:string
}


