import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Partial<Employee> = { name: '', role: '' };
  editingEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // 🔹 Load all employees
  loadEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data: Employee[]) => this.employees = data,
      error: (err) => console.error('Error loading employees', err)
    });
  }

  // 🔹 Add a new employee
  addEmployee(): void {
    if (!this.newEmployee.name || !this.newEmployee.role) return;

    this.employeeService.create(this.newEmployee as Employee).subscribe({
      next: () => {
        this.loadEmployees();
        this.newEmployee = { name: '', role: '' };
      },
      error: (err) => console.error('Error adding employee', err)
    });
  }

  // 🔹 Start editing an employee
  editEmployee(emp: Employee): void {
    this.editingEmployee = { ...emp }; // clone so we don’t directly bind
  }

  // 🔹 Update employee
  updateEmployee(): void {
    if (this.editingEmployee && this.editingEmployee.id) {
      this.employeeService.update(this.editingEmployee.id, this.editingEmployee).subscribe({
        next: () => {
          this.loadEmployees();
          this.editingEmployee = null;
        },
        error: (err) => console.error('Error updating employee', err)
      });
    }
  }

  // 🔹 Cancel editing
  cancelEdit(): void {
    this.editingEmployee = null;
  }

  // 🔹 Delete employee
  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.delete(id).subscribe({
        next: () => this.loadEmployees(),
        error: (err) => console.error('Error deleting employee', err)
      });
    }
  }
}
