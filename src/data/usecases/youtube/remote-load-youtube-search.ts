import { HttpClient, HttpStatusCode } from '@data/protocols'
import { UnexpectedError } from '@domain/errors'
import { LoadYoutubeSearch } from '@domain/usecases'

export class RemoteLoadYoutubeSearch implements LoadYoutubeSearch {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadYoutubeSearch.Model>
  ) {}

  async load (): Promise<LoadYoutubeSearch.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const remote = httpResponse.body!

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remote
      default: throw new UnexpectedError()
    }
  }
}
