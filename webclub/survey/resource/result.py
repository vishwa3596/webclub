from flask_restful import Resource
from model.Database import User, Language, Framework, Ide, OS


class Result(Resource):
    @classmethod
    def get(cls):
        print(len(User.query.all()))
        '''
        objective is to create an array which carry the value associated with each of the entries
        the find the average of each of the value which gives us the answer of the survey
        
        '''
        count = 0
        count1 = 0
        language_array = [0]*len(Language.query.all()) # method to create an array of respective parameters with value 0
        framework_array = [0]*len(Framework.query.all())
        ide_array = [0]*len(Ide.query.all())
        os_array = [0]*len(OS.query.all())

        for user in User.query.all():
            count += 1
            for language in Language.query.all():
                if language.language_name == user.language:
                    language_array[count1] = language_array[count1]+1
                    break
                count1 += 1
            count1 = 0
            for framework in Framework.query.all():
                if framework.framework_name == user.framework:
                    framework_array[count1] = framework_array[count1] + 1
                    break
                else:
                    count1 += 1
            count1 = 0
            for ide in Ide.query.all():
                if ide.ide == user.ide:
                    ide_array[count1] = ide_array[count1] + 1
                    break
                else:
                    count1 += 1
            count1 = 0
            for os in OS.query.all():
                if os.os == user.os:
                    os_array[count1] = os_array[count1] + 1
                    break
                else:
                    count += 1
        '''
        now to render the value of the result i again have to create a string array 
        '''
        language_string = ['']*len(Language.query.all())
        framework_string = ['']*len(Framework.query.all())
        ide_string = ['']*len(Ide.query.all())
        os_string = ['']*len(OS.query.all())

        # initializer
        i = 0
        for languages in Language.query.all():
            language_array[i] = language_array[i]*100/count
            language_string[i] = languages.language_name + " : " + str(language_array[i])
            i += 1
        i = 0
        for framework in Framework.query.all():
            framework_array[i] = framework_array[i]*100/count
            framework_string[i] = framework.framework_name + " : " + str(framework_array[i])
            i += 1
        i = 0
        for ides in Ide.query.all():
            ide_array[i] = ide_array[i]*100/count
            ide_string[i] = ides.ide + " : " + str(ide_array[i])
            i += 1
        i = 0
        for os in OS.query.all():
            os_array[i] = os_array[i]*100/count
            os_string[i] = os.os + " : " + str(os_array[i])
            i += 1

        return {"language": language_array, "framework": framework_array, "ide": ide_array, "os": os_array}













