class Counter:

    def __init__(self):
        self._references = {}

    def addReference(self, reference):
        # print(list(self._references.keys()).count(reference))
        if reference not in self._references:
            self._references[reference] = 1
        else:
            self._references[reference] += 1

    def getValue(self, reference):
        if reference not in self._references:
            return 0
        else:
            return self._references[reference]

    def getFullReferences(self):
        return self._references
    
