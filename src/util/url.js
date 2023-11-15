function getComputedUrl(path){
  return `${location.protocol}://${window.location.hostname}/${path}`
}

export default getComputedUrl;