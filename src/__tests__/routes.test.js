const request = require('supertest');
const express = require('express');
const sustainabilityRoutes = require('../routes/sustainability');

describe('Sustainability Routes', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/initiatives', sustainabilityRoutes);
  });

  describe('GET /initiatives', () => {
    test('should return all initiatives', async () => {
      const response = await request(app)
        .get('/initiatives')
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    test('should return initiatives with correct structure', async () => {
      const response = await request(app)
        .get('/initiatives')
        .expect(200);

      const requiredFields = ['id', 'name', 'description', 'category', 'status'];
      response.body.forEach(initiative => {
        requiredFields.forEach(field => {
          expect(initiative).toHaveProperty(field);
        });
      });
    });
  });

  describe('GET /initiatives/:id', () => {
    test('should return a specific initiative by id', async () => {
      const response = await request(app)
        .get('/initiatives/1')
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toBe(1);
    });

    test('should return 404 for non-existent initiative', async () => {
      const response = await request(app)
        .get('/initiatives/99999')
        .expect(404);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Initiative not found');
    });
  });

  describe('POST /initiatives', () => {
    test('should create a new initiative', async () => {
      const newInitiative = {
        name: 'New Green Project',
        description: 'A new sustainability project',
        category: 'environmental',
        status: 'pending'
      };

      const response = await request(app)
        .post('/initiatives')
        .send(newInitiative)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('New Green Project');
      expect(response.body.description).toBe('A new sustainability project');
    });

    test('should return created initiative with id', async () => {
      const newInitiative = {
        name: 'Solar Energy Initiative',
        description: 'Install solar panels',
        category: 'renewable',
        status: 'active'
      };

      const response = await request(app)
        .post('/initiatives')
        .send(newInitiative)
        .expect(201);

      expect(typeof response.body.id).toBe('number');
      expect(response.body.id).toBeGreaterThan(0);
    });
  });

  describe('PUT /initiatives/:id', () => {
    test('should update an existing initiative', async () => {
      const updateData = {
        name: 'Updated Initiative Name',
        status: 'completed'
      };

      const response = await request(app)
        .put('/initiatives/1')
        .send(updateData)
        .expect(200);

      expect(response.body.name).toBe('Updated Initiative Name');
      expect(response.body.status).toBe('completed');
      expect(response.body.id).toBe(1);
    });

    test('should return 404 for non-existent initiative', async () => {
      const updateData = {
        name: 'Updated Name'
      };

      const response = await request(app)
        .put('/initiatives/99999')
        .send(updateData)
        .expect(404);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Initiative not found');
    });
  });

  describe('DELETE /initiatives/:id', () => {
    test('should delete an initiative', async () => {
      // Primeiro criar uma iniciativa
      const createResponse = await request(app)
        .post('/initiatives')
        .send({
          name: 'To Delete',
          description: 'This will be deleted',
          category: 'test',
          status: 'active'
        })
        .expect(201);

      const id = createResponse.body.id;

      // Depois deletar
      const deleteResponse = await request(app)
        .delete(`/initiatives/${id}`)
        .expect(200);

      expect(deleteResponse.body).toHaveProperty('id');
      expect(deleteResponse.body.id).toBe(id);

      // Verificar que foi deletado
      await request(app)
        .get(`/initiatives/${id}`)
        .expect(404);
    });

    test('should return 404 when deleting non-existent initiative', async () => {
      const response = await request(app)
        .delete('/initiatives/99999')
        .expect(404);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Initiative not found');
    });
  });
});
