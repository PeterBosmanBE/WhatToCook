import { author, repository, version, productName } from '../../package.json'

export default function GetAppInfo() {
  return {
    name: productName,
    version,
    url: repository.url,
    issues: repository.url + "/issues",
    creator: author.name,
    portfolio: author.portfolio
  }
}