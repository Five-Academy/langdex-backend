import { Test, TestingModule } from '@nestjs/testing';
import { LangdexController } from './langdex.controller';
import {LangdexService} from './langdex.service';
import { FrontpageLanguageDto } from './dto/frontpage-language.dto';
import { DetailedLanguageDto } from './dto/detailed-language-dto';

const frontPageMock: FrontpageLanguageDto[] = [
{
  id: 1,
  name: 'java',
  image_url: 'www.google.com'
},
{
  id: 2,
  name: 'java',
  image_url: 'www.google.com'
},
{
  id: 3,
  name: 'java',
  image_url: 'www.google.com'
}
];

/*const lang: DetailedLanguageDto = {
  id: 1,
  name: 'java',
  image_url: 'www.google.com',
  language_usage: 'back-end',
  is_object_oriented: true,
  is_functional: true,
  is_procedural: true
};*/
 

describe('TestRetorneFromRouter', () => {
  let langController: LangdexController; 
  let langService: LangdexService;  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangdexController],
      providers: [
        {
          provide: LangdexService,
          useValue: {
            findFrontpage: jest.fn().mockResolvedValue(frontPageMock),
            createLanguage: jest.fn(),
            getLanguageById: jest.fn().mockResolvedValue(frontPageMock[1])
          }
        }
      ]
    }).compile();
    
    langController = module.get<LangdexController>(LangdexController);
    langService = module.get<LangdexService>(LangdexService); 
  });

  it('should be defined', () => {
    //range
    
    expect(langController).toBeDefined();
    expect(langService).toBeDefined();
  });

  describe('ReturnArrayOfLanguageObject()', () => {
    test('Should be return a array of language from page', async () => {
      //act 
      const result = await langController.getFrontpage();
      // assurt
      expect(result).toEqual(frontPageMock);
    });
  });

  describe('ReturnALanguage()', () => {
    test('Should be return a language', async () => {
      const result = await langController.findById('2');
      
      console.log(result.id, frontPageMock[0].id);
      expect(result.id).toEqual(frontPageMock[1].id);
    })
  })

});
