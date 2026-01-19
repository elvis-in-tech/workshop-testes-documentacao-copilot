const service = require('../services/sustainabilityService');

describe('Sustainability Service', () => {
  let initialLength;

  beforeEach(() => {
    // Salvar estado inicial
    initialLength = service.getAll().length;
  });

  describe('getAll', () => {
    test('should return an array of initiatives', () => {
      const initiatives = service.getAll();
      expect(Array.isArray(initiatives)).toBe(true);
      expect(initiatives.length).toBeGreaterThan(0);
    });

    test('should return initiatives with required fields', () => {
      const initiatives = service.getAll();
      const requiredFields = ['id', 'name', 'description', 'category', 'status'];
      
      initiatives.forEach(initiative => {
        requiredFields.forEach(field => {
          expect(initiative).toHaveProperty(field);
        });
      });
    });
  });

  describe('getById', () => {
    test('should return an initiative by id', () => {
      const initiative = service.getById(1);
      expect(initiative).toBeDefined();
      expect(initiative.id).toBe(1);
    });

    test('should return undefined for non-existent id', () => {
      const initiative = service.getById(99999);
      expect(initiative).toBeUndefined();
    });

    test('should handle string ids correctly', () => {
      const initiative = service.getById('1');
      expect(initiative).toBeDefined();
      expect(initiative.id).toBe(1);
    });
  });

  describe('create', () => {
    test('should create a new initiative', () => {
      const newInitiative = {
        name: 'Test Initiative',
        description: 'A test initiative',
        category: 'test',
        status: 'active'
      };

      const created = service.create(newInitiative);
      
      expect(created).toHaveProperty('id');
      expect(created.name).toBe('Test Initiative');
      expect(created.description).toBe('A test initiative');
    });

    test('should assign unique id to new initiatives', () => {
      const initiative1 = service.create({ name: 'Test 1', description: 'Desc 1', category: 'test', status: 'active' });
      const initiative2 = service.create({ name: 'Test 2', description: 'Desc 2', category: 'test', status: 'active' });
      
      expect(initiative1.id).not.toBe(initiative2.id);
    });
  });

  describe('update', () => {
    test('should update an existing initiative', () => {
      const updated = service.update(1, { name: 'Updated Name' });
      
      expect(updated).toBeDefined();
      expect(updated.name).toBe('Updated Name');
      expect(updated.id).toBe(1);
    });

    test('should return null for non-existent id', () => {
      const updated = service.update(99999, { name: 'Updated' });
      expect(updated).toBeNull();
    });

    test('should preserve other fields when updating', () => {
      const originalInitiative = service.getById(1);
      service.update(1, { name: 'Updated Name Only' });
      const updatedInitiative = service.getById(1);
      
      expect(updatedInitiative.description).toBe(originalInitiative.description);
      expect(updatedInitiative.category).toBe(originalInitiative.category);
    });
  });

  describe('remove', () => {
    test('should remove an initiative', () => {
      // Criar um novo item para remover
      const newItem = service.create({ name: 'To Remove', description: 'Temp', category: 'test', status: 'active' });
      const beforeRemove = service.getAll().length;
      
      service.remove(newItem.id);
      const afterRemove = service.getAll().length;
      
      expect(afterRemove).toBeLessThan(beforeRemove);
      expect(service.getById(newItem.id)).toBeUndefined();
    });

    test('should return the removed initiative', () => {
      // Criar um novo item para remover
      const newItem = service.create({ name: 'To Remove', description: 'Temp', category: 'test', status: 'active' });
      const result = service.remove(newItem.id);
      
      expect(result).toBeDefined();
      expect(result.id).toBe(newItem.id);
      expect(result.name).toBe('To Remove');
    });

    test('should return null when removing non-existent initiative', () => {
      const result = service.remove(99999);
      expect(result).toBeNull();
    });
  });
});
